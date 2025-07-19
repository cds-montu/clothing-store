import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import fashionBanner from "../images/fashionBanner.png";




const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${fashionBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        />
        <Box
          sx={{
            zIndex: 1,
            color: "#fff",
            textAlign: "center",
            px: 4,
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Discover Our Latest Collection
          </Typography>
          <Typography variant="h6" gutterBottom>
            Fashion that speaks for you
          </Typography>
          <Button variant="contained" onClick={() => navigate("/new-arrivals")}>
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Trending Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Trending Now
          </Typography>
          <Typography variant="subtitle1" textAlign="center" sx={{ maxWidth: 600, mx: "auto" }}>
            Curated looks for this season. Handpicked styles that define confidence and elegance.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 5, flexWrap: "wrap" }}>
            <Button component={Link} to="/Men" variant="outlined">Men</Button>
            <Button component={Link} to="/Women" variant="outlined">Women</Button>
            <Button component={Link} to="/TShirts" variant="outlined">T-Shirts</Button>
            <Button component={Link} to="/Shirts" variant="outlined">Shirts</Button>
          </Box>
        </motion.div>
      </Container>

      {/* Mood Section */}
      <Box
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1593032457869-5e8d6c9c9b6f")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ backgroundColor: "rgba(255,255,255,0.7)", px: 4, py: 2, borderRadius: 2 }}
        >
          Fashion is a language. Speak yours.
        </Typography>
      </Box>

      {/* CTA Final Section */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Ready to Redefine Your Look?
          </Typography>
          <Button component={Link} to="/All" variant="contained" size="large">
            Browse All Products
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
