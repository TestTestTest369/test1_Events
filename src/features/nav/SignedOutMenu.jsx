import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <MenuItem position='right'>
      <Button
        onClick={() => setAuthenticated(true)}
        basic
        inverted
        content='Login'
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: "0.5em" }}
      />
    </MenuItem>
  );
}
