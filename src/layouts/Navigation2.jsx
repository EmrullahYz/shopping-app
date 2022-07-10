import React from "react";

import { Menu, MenuItem } from "semantic-ui-react";
export const Navigation2 = () => {
  return (
    <div>
      <Menu secondary size="mini">
        <MenuItem name="Elektronik">Elektronik</MenuItem>
        <MenuItem name="Moda">Moda</MenuItem>
        <MenuItem name="EvYasamOFis">Ev, Yasam, Kirtasiye, Ofis</MenuItem>
        <MenuItem name="OtoYapiMarket">Oto, Bahce, Yapi, Market</MenuItem>
        <MenuItem name="Anne, Bebek, Oyuncak">Anne, Bebek, Oyuncak</MenuItem>
        <MenuItem name="Spor, Outdoor">Spor, Outdoor</MenuItem>
        <MenuItem name="Kozmetik, Kisisel Bakim">
          Kozmetik, Kisisel Bakim
        </MenuItem>
        <MenuItem name="Super Market, Pet Shop">
          Super Market, Pet Shop
        </MenuItem>

        <MenuItem name="Kitap, Muzik, Film, Hobi">
          Kitap, Muzik, Film, Hobi
        </MenuItem>
      </Menu>
    </div>
  );
};
