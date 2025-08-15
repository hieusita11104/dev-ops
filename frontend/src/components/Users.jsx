import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`)
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Lỗi khi tải dữ liệu người dùng');
        setLoading(false);
        console.error('Error fetching users:', err);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-600 text-lg">Đang tải...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1F2937' }}>
          Danh sách người dùng
        </h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          style={{ fontWeight: '500' }}
        >
          Thêm người dùng
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md" style={{ border: '1px solid #E5E7EB' }}>
          <thead className="bg-gray-100">
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>ID</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Username</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Email</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Vai trò</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#4B5563', fontWeight: '600', borderBottom: '1px solid #E5E7EB' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="hover:bg-gray-50 transition duration-200">
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{u.id}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{u.username}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{u.email}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{u.role}</td>
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

export default Users;