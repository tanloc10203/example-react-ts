import { Button, Space } from "antd";
import { useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";
import { authServices } from "~/services";
import { LocalStorage, LoginInput, Paths, Status } from "~/types";
import { AxiosError } from "axios";
import { TextInput } from "~/components";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [values, setValues] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>(Status.Ready);
  const [error, setError] = useState("");

  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(Status.Start);

    return new Promise(async (resolve, _) => {
      try {
        const response = await authServices.login(values);
        setStatus(Status.Complete);
        localStorage.setItem(LocalStorage.Token, response.token);
        navigate(Paths.Home, { replace: true });
        resolve(true);
      } catch (error) {
        setStatus(Status.Fail);
        if (error instanceof AxiosError) {
          if (error.response && error.response.data) {
            setError(error.response.data.error);
          }
        }
      }
    });
  };

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
          <form onSubmit={onFinish} action="">
            {error && <p style={{ color: "red" }}>{error}</p>}

            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="hidden"
              placeholder="Enter email"
              value={values.email}
              required
              onChangeInput={onChangeInput}
            />

            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              autoComplete="hidden"
              value={values.password}
              required
              onChangeInput={onChangeInput}
            />

            <Button
              type="primary"
              htmlType="submit"
              loading={status === Status.Start}
            >
              {status === Status.Start ? "Loading..." : "Login"}
            </Button>
          </form>
        </Space>
      </div>
    </div>
  );
};

export default Login;
