import { Link, Stack, Typography } from "@mui/material";

function FooterCredit() {
  const year = new Date().getFullYear();

  return (
    <Stack>
      <Typography variant="body2" align="center">
        © {year} Realtime Crypto Dashboard
      </Typography>
      <Typography variant="body2" align="center">
        Crafted with ❤️ by{" "}
        <Link href="https://github.com/chanmyaemaung">Chen Lay</Link>
      </Typography>
    </Stack>
  );
}

export default FooterCredit;
