import { Form, Button, Input } from "antd"
const FormRegister = (props) => {
    const { message, loading } = props;
    return (
        <>
            <Form.Item
                label="Tên đăng nhập :"
                name="fullName"
                className="form-register__account"
                rules={
                    [
                        {
                            required: true,
                            message: "Vui lòng nhập tên đăng ký !"
                        }
                    ]
                }
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Địa chỉ email :"
                name="email"
                className="form-register__account"
                rules={[
                    {
                        type: "email",
                        message: "Email không hợp lệ !"
                    },
                    {
                        required: true,
                        message: "Vui lòng nhập địa chỉ email"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Mật khẩu :"
                name="password"
                className="form-register__account"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu đăng ký !"
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                label="Xác minh mật khẩu"
                dependencies={['password']}
                className="form-register__account"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng xác minh lại mật khẩu',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu bạn nhập không hớp'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            {
                message && <p className="form-register__warning !">
                    Tài khoản đã tồn tại !
                </p>
            }
            <Form.Item className="form-register__sign-up">
                <Button htmlType="submit" loading={loading}>Sign Up</Button>
            </Form.Item>
        </>
    )
}
export default FormRegister;