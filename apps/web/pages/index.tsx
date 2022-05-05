import { Button, Input, Typography } from 'storybookui'
export default function Web() {
  return (
    <div>
      <Typography role='h1' >Hello World</Typography>
      <Input label='Usernmae' name='username' />
      <Button label='Hello World' variant='secondary'></Button>
    </div>
  );
}
