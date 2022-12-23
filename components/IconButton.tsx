import { FC, ReactNode } from "react";

import { ActionIcon } from "@mantine/core";

type IconButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
};

const IconButton: FC<IconButtonProps> = ({ children, handleClick }) => {
  return (
    <ActionIcon
      variant="default"
      color="gray"
      radius="xl"
      onClick={handleClick}
    >
      {children}
    </ActionIcon>
  );
};

export default IconButton;
