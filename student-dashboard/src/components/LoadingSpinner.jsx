const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <div style={{
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #6366f1',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ marginTop: '20px', color: '#6b7280', fontSize: '14px' }}>Loading students...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;