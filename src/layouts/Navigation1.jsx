import React from "react";
import { Dropdown, Menu, Image, Button, MenuItem } from "semantic-ui-react";

export const Navigation1 = () => {
  const handleSepetimClick = () => {};
  return (
    <div>
      <Menu className="bg-orange-100">
        <Menu.Item className="bg-orange-100">
          <Image
            src="data:image/png;base64,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"
            as="a"
            size="medium"
            href="http://example.com"
            target="_blank"
          />
        </Menu.Item>
        <Menu.Menu position="right" size="med">
          <Menu.Item>Home</Menu.Item>
          <Dropdown
            text="Shopping"
            pointing
            className="link item"
            position="right "
          >
            <Dropdown.Menu>
              <Dropdown.Header>Categories</Dropdown.Header>
              <Dropdown.Item>
                <Dropdown text="Clothing">
                  <Dropdown.Menu>
                    <Dropdown.Header>Mens</Dropdown.Header>
                    <Dropdown.Item>Shirts</Dropdown.Item>
                    <Dropdown.Item>Pants</Dropdown.Item>
                    <Dropdown.Item>Jeans</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Womens</Dropdown.Header>
                    <Dropdown.Item>Dresses</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Item>Bags</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Home Goods</Dropdown.Item>
              <Dropdown.Item>Bedroom</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Order</Dropdown.Header>
              <Dropdown.Item>Status</Dropdown.Item>
              <Dropdown.Item>Cancellations</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>Forums</Menu.Item>
          <MenuItem>
            <Button color="orange" onClick={() => handleSepetimClick()}>
              Giris Yap
            </Button>
            <Button color="orange" onClick={() => handleSepetimClick()}>
              Uye ol
            </Button>
          </MenuItem>
        </Menu.Menu>
      </Menu>
    </div>
  );
};
