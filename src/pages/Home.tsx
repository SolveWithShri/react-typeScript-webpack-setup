import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const onPlaceOrderbuttonClick = () => {
    // navigate('order-summary');
    navigate('order-summary', { replace: true });
  };

  return (
    <>
      <div>Home Page</div>

      <button onClick={onPlaceOrderbuttonClick}>Place Order</button>
    </>
  );
};
