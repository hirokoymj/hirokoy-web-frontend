import { useState } from 'react';
import { GoogleGenAI, createUserContent } from '@google/genai';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';

const useStyles = makeStyles()((theme) => ({
  modelInfo: {
    '& p': {
      margin: 0,
      padding: 0,
      fontSize: 'medium',
      lineHeight: 'inherit',
    },
  },
  demoForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '100%',
    padding: 0,
    '& textarea, select': {
      padding: theme.spacing(1),
    },
  },
}));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const example1 =
  'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.';

export const GeminiDemo = () => {
  const { classes } = useStyles();
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle');

  const generateSummary = async () => {
    setStatus('loading');
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: [createUserContent(['Summarize the following text in less than 300 characters.', example1])],
      });
      setStatus('success');
      setOutput(response.text); //response.text is a property, not reponse.text().
    } catch (error) {
      setStatus('error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateSummary();
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid size={12}>
          <Box sx={{ fontSize: 'h4.fontSize', m: 1, fontWeight: 'bold' }}>Gemini Sumamry Generator</Box>
          <Alert severity="info" icon={false} className={classes.modelInfo}>
            <p>
              model: <b>Gemini 2.5 Flash lite</b>
            </p>
            <p>
              API: <b>@google/genai</b>
            </p>
            <p>
              Prompt: <b>Summarize the given text in less than 300 characters.</b>
            </p>
          </Alert>
          <Paper sx={{ p: 4 }}>
            <form onSubmit={handleSubmit} className={classes.demoForm}>
              <select onChange={(e) => setText(e.target.value)}>
                <option value="">Example Text</option>
                <option value={example1}>Sample Text 1</option>
              </select>
              <textarea
                name="input-text"
                value={text}
                placeholder="Your sentence here..."
                rows="10"
                cols="50"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <Button variant="contained" type="submit" sx={{ width: '30%' }}>
                Generate
              </Button>
              {status === 'loading' ? (
                <p>Loading..</p>
              ) : status === 'success' ? (
                <Alert severity="success" icon={false}>
                  {output}
                </Alert>
              ) : status === 'error' ? (
                <p>Error getting the summary</p>
              ) : (
                ''
              )}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

//https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-lite
//models/gemini-2.5-flash-lite
//A Gemini 2.5 Flash model optimized for cost-efficiency and high throughput.
// model: gemini-2.5-flash-lite
// Text to Text
// Prompt: Summarize the following text in less than 300 characters.
//demo7.js
//https://huggingface.co/facebook/bart-large-cnn
