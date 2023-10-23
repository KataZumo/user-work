import { Button, Form } from 'antd'

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean | undefined;
    loading?: boolean | undefined;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
}

export const CustomButton: React.FC<Props> = ({ children, htmlType, type, danger, loading, shape, icon, onClick  }) => {
  return (
    <Form.Item>
      <Button 
        htmlType={ htmlType } 
        type={ type }
        danger={ danger }
        loading={ loading }
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  )
}
