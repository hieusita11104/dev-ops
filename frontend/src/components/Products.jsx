import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Lỗi khi tải dữ liệu sản phẩm');
        setLoading(false);
        console.error('Error fetching products:', err);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-600 text-lg">Đang tải...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1F2937' }}>
          Danh sách sản phẩm
        </h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          style={{ fontWeight: '500' }}
        >
          Thêm sản phẩm
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md" style={{ border: '1px solid #E5E7EB' }}>
          <thead className="bg-gray-100">
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>ID</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Tên</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Giá</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Kho</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition duration-200">
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{p.id}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{p.name}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{p.price}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{p.stock}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>
                  <button className="text-blue-600 hover:underline mr-2">Xem</button>
                  <button className="text-green-600 hover:underline">Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;