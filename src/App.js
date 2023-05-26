import { useState } from "react";
import FormInput from "./components/FormInput";
import { emailValidation } from "./Validation";
import Form from "./container/Form";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className='bg-gray-200 h-[100vh] flex items-center justify-center'>
      <form>
        <FormInput
          label='Your Email'
          placeholder='email@codewave.com'
          type='email'
          required={true}
          name='email'
          validator={emailValidation}
          onChange={(text) => setEmail(text)}
        />
        <FormInput
          label='Password'
          placeholder='Password'
          type='password'
          required={true}
          name='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
