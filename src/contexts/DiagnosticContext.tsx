import React, { createContext, useContext, useState, useCallback } from "react";

interface DiagnosticState {
  answers: Record<string, number>;
  setAnswers: (answers: Record<string, number>) => void;
  updateAnswer: (key: string, value: number) => void;
  clearAnswers: () => void;
}

const DiagnosticContext = createContext<DiagnosticState | undefined>(undefined);

export const DiagnosticProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswersState] = useState<Record<string, number>>({});

  const setAnswers = useCallback((a: Record<string, number>) => setAnswersState(a), []);
  const updateAnswer = useCallback((key: string, value: number) => {
    setAnswersState((prev) => ({ ...prev, [key]: value }));
  }, []);
  const clearAnswers = useCallback(() => setAnswersState({}), []);

  return (
    <DiagnosticContext.Provider value={{ answers, setAnswers, updateAnswer, clearAnswers }}>
      {children}
    </DiagnosticContext.Provider>
  );
};

export const useDiagnostic = () => {
  const ctx = useContext(DiagnosticContext);
  if (!ctx) throw new Error("useDiagnostic must be used within DiagnosticProvider");
  return ctx;
};
