import { ReactNode, useState } from "react";
import providerFile from './context';


const provider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const contextObj = {
    open,
    setOpen,
  };

  return (
    <div>
      <providerFile.Provider value={contextObj}>
        {children}
      </providerFile.Provider>
    </div>
  );
};

export default provider;
