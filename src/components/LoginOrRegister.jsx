import { createSignal } from 'solid-js';
import { supabase } from '../auth';
import React from 'react';

export default function Login() {
  const [email, setEmail] = createSignal('');
  const [status, setStatus] = createSignal({
    error: '',
    success: false,
    isLoading: false,
  });

  const handleSendLink = async () => {
    setStatus({ error: '', success: false, isLoading: true });

    const { error } = await supabase.auth.signInWithOtp(
      {
        email: email(),
      },
      {
        redirectTo: import.meta.env.PUBLIC_REDIRECT_URL,
      },
    );

    if (error?.message) {
      setStatus(() => ({
        error: error.message,
        success: false,
        isLoading: false,
      }));
    } else {
      setStatus({ error: '', success: true, isLoading: false });
    }
  };

  return (
    <div>
      <div>
        <input
          disabled={status().isLoading}
          id="email"
          type="text"
          placeholder="Email"
          value={email()}
          onInput={(v) => setEmail(v.currentTarget.value)}
        />
        {status().error ? <div>{status().error}</div> : null}
        {status().success ? (
          <div>An email should arrive in your inbox shortly </div>
        ) : null}
      </div>
      <div>
        <button
          disabled={status().isLoading}
          type="button"
          onClick={handleSendLink}
          aria-busy={status().isLoading ? 'true' : 'false'}
        >
          Send magic link to your email!
        </button>
      </div>
    </div>
  );
}
