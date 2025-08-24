'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import client from '../../api/client';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      client.auth.getSession().then(({ data }) => {
        setUser(data?.session?.user || null);
          setLoading(false);
      });

      const { data: listener } = client.auth.onAuthStateChange((e, session) => {
        setUser(session?.user || null);
        setLoading(false);
      });

      return () => {
        listener.subscription.unsubscribe();
      };
    }, []);

    const signIn = async (email, password) => {
      setLoading(true);
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) {
        setLoading(false);
        throw error;
      }
    };

    const signUp = async (email, password) => {
      setLoading(true);
      const { error } = await client.auth.signUp({ email, password });
      if (error) {
        setLoading(false);
        throw error;
      }
    };

    const signOut = async () => {
      setLoading(true);
      const { error } = await client.auth.signOut();
      if (error) {
        setLoading(false);
        throw error;
      }
    };

    return (
      <AuthContext.Provider value={{ user, loading }}>
        {children}
      </AuthContext.Provider>
    );

}

export { AuthContext, AuthProvider };