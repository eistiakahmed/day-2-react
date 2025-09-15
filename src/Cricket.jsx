import { useState } from 'react';

export default function Baller() {
  const [ball, setBall] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleBall = () => {
    const newBall = ball + 1;
    setBall(newBall);
  };

  const handleWeight = () => {
    const wed = weight + 1;
    setWeight(wed);
  
  };
  return (
    <div>
      <h3>Sakib AL Hasan</h3>
      {ball >= 6 && <p>Over complete</p>}
      {weight > 2&& <p>Captain: Next Match thaka Ball korta chaile Nono kate nibo</p>}
      <h1>
        Ball: {ball} Wed: {weight}
      </h1>
      <button onClick={handleBall} disabled={ball >= 6}>
        Ball
      </button>

      <button onClick={handleWeight}>Weight Ball</button>
    </div>
  );
}
