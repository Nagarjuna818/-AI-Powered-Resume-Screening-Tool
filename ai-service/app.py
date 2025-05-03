from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # ✅ Enables all origins

# Load lightweight transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        resume_text = data.get('resumeText', '')
        job_description = data.get('jobDescription', '')

        if not resume_text or not job_description:
            return jsonify({'error': 'Both resumeText and jobDescription are required'}), 400

        # Create embeddings
        embeddings = model.encode([resume_text, job_description])
        similarity = cosine_similarity([embeddings[0]], [embeddings[1]])[0][0]
        score = round(similarity * 100)

        return jsonify({
            'similarityScore': score,
            'message': 'Analysis complete'
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
