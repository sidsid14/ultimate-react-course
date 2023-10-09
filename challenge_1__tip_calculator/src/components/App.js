import { useState } from "react";

export default function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const avgTip = Math.round((myTip + friendTip) / 2);
  function handleReset() {
    setTotalBill(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput totalBill={totalBill} onBillInput={setTotalBill} />
      <Feedback tip={myTip} onSelect={setMyTip}>
        How did you like the service?
      </Feedback>
      <Feedback tip={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </Feedback>
      {totalBill > 0 && (
        <>
          <PaymentMessage totalBill={totalBill} tip={avgTip} />
          <Reset totalBill={totalBill} onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ totalBill, onBillInput }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={totalBill}
        type="number"
        onChange={(e) => onBillInput(Number(e.target.value))}
      />
    </div>
  );
}

function Feedback({ tip, onSelect, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function PaymentMessage({ totalBill, tip }) {
  const tipPercent = Math.round((tip * totalBill) / 100);
  const total = totalBill + tipPercent;
  return (
    <div>
      <h3>
        You pay {total} ({`$${totalBill} + $${tipPercent}`})
      </h3>
    </div>
  );
}

function Reset({ totalBill, onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
