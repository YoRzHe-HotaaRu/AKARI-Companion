const express = require('express');
const cors = require('cors');
const mangakakalot = require('mangakakalot-api');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Health check endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Manga Library API is running' });
});

// Search manga endpoint
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    // Use the search function
    const results = await mangakakalot.search(query);
    res.json(results);
  } catch (error) {
    console.error('Error searching manga:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get manga details endpoint
app.get('/api/manga/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Manga ID is required' });
    }
    
    // Use the scrapeMangaDetails function
    const manga = await mangakakalot.scrapeMangaDetails(id);
    res.json(manga);
  } catch (error) {
    console.error('Error getting manga details:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get chapter pages endpoint
app.get('/api/chapter/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Chapter ID is required' });
    }
    
    // Use the scrapeChapterImages function
    const chapter = await mangakakalot.scrapeChapterImages(id);
    res.json(chapter);
  } catch (error) {
    console.error('Error getting chapter:', error);
    res.status(500).json({ error: error.message });
  }
});

// Image proxy endpoint
app.get('/api/image', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    const response = await axios({
      method: 'GET',
      url: decodeURIComponent(url),
      responseType: 'arraybuffer',
      headers: {
        'Referer': 'https://mangakakalot.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    console.error('Error proxying image:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});