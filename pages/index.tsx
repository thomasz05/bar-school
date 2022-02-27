import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home as HomeIcon, ShoppingBasket as BasketIcon } from "@mui/icons-material";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0)

  return (
    <div className='w-full h-full'>
      <div className='fixed bottom-0 w-full'>
          <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                  setValue(newValue);
              }}
          >
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction label="Carello" icon={<BasketIcon />} />
          </BottomNavigation>
      </div>
    </div>
  )
}
