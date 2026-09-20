import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cup: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Chai");
  const [cup, setCup] = useState(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cup });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name: </label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Cups: </label>
      <input
        type="number"
        value={cup}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
            //   setCup(e.target.value)  //* ERROR: Type 'string' is not assignable --
            //! whenever you take input from the user, it will always give you a string wether on mobile or desktop
            setCup(Number(e.target.value || 0)) // setCups -- we have told that it will expect number -- so we need to convert it to a number
        }
      />
      <button type="submit">Order Placed</button> 
    </form>
  );
}
