import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import { fetchComments } from './api/YouTubeService';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Login from './components/Login';
import MyButton from './components/MyButton';
import SearchBar from './components/SearchBar';
import SignUp from './components/SignUp';
import { Comment } from './models';

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = (newComment: Comment) => {
    setComments([...comments, newComment]);
  }

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      // If no files are selected, set the state back to null
      setSelectedFile(null);
    }
  };

  const onFileUpload = async () => {
    // Check if a file is selected
    if (selectedFile) {
      const formData = new FormData();
      formData.append(
        "video", // The field name should match the name expected by the server
        selectedFile
      );

      try {
        const response = await axios.post('http://localhost:8080/api/videos/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setUploadStatus('Upload successful!');
        console.log(response.data);
      } catch (error) {
        setUploadStatus('Upload failed.');
        console.log('Error uploading file:');
      }
    } else {
      setUploadStatus('Please select a file to upload.');
    }
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>fileeeeeeeeeeeeeeeeee</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h4> Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  const handleSearch = (query: any) => {
    console.log(`Search query: ${query}`);
  };

  useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
    };
    loadComments();
  }, []);

  return (
    <Router>
      <div className="App">

        <Link to="/Login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/SignUp">SignUp</Link>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={
            <>

              <SearchBar onSearch={handleSearch} />
              <header className="App-header">
                <input type="file" onChange={onFileChange} />
                <MyButton onClick={onFileUpload} buttonText="Submit" />
              </header>

              <CommentForm addComment={addComment} />
              <h1>YouTube Comments</h1>
              <CommentList comments={comments} />
            </>}
          />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
