import React, { FC } from 'react';
import { Button } from 'native-base';

interface CustomButtonProps {
  backgroundColor: string;
  onPress?: () => void;
  buttonTitle: any
}

const CustomButton: FC<CustomButtonProps> = ({ backgroundColor, onPress, buttonTitle }) => {
  return (
    <Button
      style={{ backgroundColor, height: 40, width: 100 }} // Customize height and width as needed
      onPress={onPress}
      variant="solid" 
    >
      {buttonTitle}
    </Button>
  );
}

export default CustomButton;
