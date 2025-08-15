import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - الصفحة غير موجودة</h1>
      <p>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <Link to="/">العودة إلى الصفحة الرئيسية</Link>
    </div>
  );
};

export default NotFound;