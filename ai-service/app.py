from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from keybert import KeyBERT

app = Flask(__name__)
CORS(app)  # ✅ Enables all origins

# Load lightweight transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')
# Load KeyBERT model
keybert_model = KeyBERT(model)

# Define the number of top keywords to extract

def extract_keywords(text, top_n=20):
    return [kw[0] for kw in keybert_model.extract_keywords(text, top_n=top_n, stop_words='english')]


@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        resume_text = data.get('resumeText', '')
        job_description = data.get('jobDescription', '')

        # Extract keywords
        resume_keywords = extract_keywords(resume_text)
        job_keywords = extract_keywords(job_description)

        # Embeddings
        resume_embeds = model.encode(resume_keywords)
        job_embeds = model.encode(job_keywords)

        matched_keywords = []
        missing_keywords = []

        for i, job_kw in enumerate(job_keywords):
            sims = cosine_similarity([job_embeds[i]], resume_embeds)[0]
            max_score = max(sims)
            if max_score > 0.7:
                matched_keywords.append(job_kw)
            else:
                missing_keywords.append(job_kw)

        similarity = cosine_similarity([model.encode([resume_text])[0]], [model.encode([job_description])[0]])[0][0]
        score = round(similarity * 100)

        return jsonify({
            'similarityScore': score,
            'matchedKeywords': matched_keywords,
            'missingKeywords': missing_keywords,
            'message': 'AI-enhanced analysis complete'
    })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
