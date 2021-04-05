import TextField from '@material-ui/core/TextField';

const TextAreaComponent = (props) => {
  const title = "hello from title";
  const content = "this is some content";

  return (
    <div style={{width: 400, backgroundColor: 'white'}}>
        <TextField
          label="Title"
          style={{ margin: 8 }}
          placeholder="Enter note title"
          fullWidth
          margin="normal"
        />
        <TextField
          style={{ margin: 8 }}          
          label="Note"
          placeholder="Enter note here"
          multiline
          fullWidth
          rows={5}
          margin="normal"
        />
    </div>
  )
}

export default TextAreaComponent;