import { Space } from "antd";
import { useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";
import { authServices } from "~/services";
import { Status } from "~/types";
import { AxiosError } from "axios";

const Login: React.FC = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<Status>(Status.Ready);
  const [error, setError] = useState("");

  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Received values of form: ", values);

    setStatus(Status.Start);

    return new Promise(async (resolve, _) => {
      try {
        const response = await authServices.login(values);
        console.log(`response`, response);
        setStatus(Status.Complete);
        resolve(true);
      } catch (error) {
        setStatus(Status.Fail);
        console.log("Login failed", error);

        if (error instanceof AxiosError) {
          if (error.response && error.response.data) {
            setError(error.response.data.error);
          }
        }
      }
    });
  };

  console.log(`status`, status);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name; // email, password
    const value = event.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={onFinish} action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={onChangeInput}
                value={values.email}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={onChangeInput}
                value={values.password}
                type="password"
                name="password"
                id="password"
              />
            </div>

            <button type="submit" disabled={status === Status.Start}>
              {status === Status.Start ? "Loading..." : "Đăng nhập"}
            </button>
          </form>
        </Space>
      </div>
    </div>
  );
};

export default Login;
