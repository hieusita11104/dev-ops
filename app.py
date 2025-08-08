def multiply(a, b):
    """
    Hàm nhân hai số a và b
    """
    return a * b


from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        "message": "Ứng dụng Python với hàm multiply",
        "example": "multiply(3, 4) = 12"
    })

@app.route('/multiply/<int:a>/<int:b>')
def multiply_route(a, b):
    result = multiply(a, b)
    return jsonify({
        "a": a,
        "b": b,
        "result": result
    })

if __name__ == '__main__':
    print("Ứng dụng đang chạy...")
    print(f"Kết quả multiply(3, 4) = {multiply(3, 4)}")
    app.run(host='0.0.0.0', port=5000, debug=True) 