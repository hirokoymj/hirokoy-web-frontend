import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

//import Header from './Header';
import { Title } from '../../components/Titles/Title';
import FileUpload from './FileUpload';
import Summary from './Summary';
import Chat from './Chat';

export const AIDemo = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid size={12}>
          <Title text="AI Demo" />
          <p>
            model: <b>Gemini 2.5 flash</b> from @firebase/ai
          </p>
          <Paper style={{ padding: '16px 24px' }}>
            {uploadedFile ? (
              <>
                <Summary file={uploadedFile} />
                <Chat file={uploadedFile} />
              </>
            ) : (
              <FileUpload setFile={setUploadedFile} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
