import { Button, Input, Typography } from 'storybookui'
export default function Web() {
  return (
    <div>
      <Typography role='h1' fontWeight='bold' fontSize='lg'>Hello World</Typography>
      <Input label='Usernmae' name='username' />
      <Button label='Hello World' variant='primary'></Button>
    </div>
  );
}
