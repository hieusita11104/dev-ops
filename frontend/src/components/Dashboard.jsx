import React from 'react';

function Dashboard() {
  return (
    <div className="py-10">
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: '2rem' }}>
        ERP Dashboard
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Tổng quan hệ thống ERP của bạn
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300" style={{ borderLeft: '4px solid #3B82F6' }}>
          <h3 className="text-xl font-semibold text-gray-800">Tổng sản phẩm</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">50</p>
          <p className="text-gray-500 mt-1">Sản phẩm đang quản lý</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300" style={{ borderLeft: '4px solid #10B981' }}>
          <h3 className="text-xl font-semibold text-gray-800">Người dùng</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">10</p>
          <p className="text-gray-500 mt-1">Tài khoản hoạt động</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300" style={{ borderLeft: '4px solid #F59E0B' }}>
          <h3 className="text-xl font-semibold text-gray-800">Tổng kho</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">1,200</p>
          <p className="text-gray-500 mt-1">Số lượng hàng tồn</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;