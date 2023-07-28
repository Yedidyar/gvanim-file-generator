import Head from "next/head";
import { fields } from "~/data";
import TextField from "@mui/material/TextField";
import { useReducer } from "react";

type FieldTypes = (typeof fields)[number]["name"];

export default function Home() {
  const [state, dispatch] = useReducer(
    (
      state: Partial<Record<FieldTypes, unknown>>,
      newState: Partial<Record<FieldTypes, unknown>>
    ) => ({
      ...state,
      ...newState,
    }),
    {}
  );

  console.log(state);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {fields.map((field) => {
          return (
            <TextField
              key={field.name}
              label={field.name}
              variant="standard"
              onChange={(e) => dispatch({ [field.name]: e.target.value })}
            />
          );
        })}
      </main>
    </>
  );
}
