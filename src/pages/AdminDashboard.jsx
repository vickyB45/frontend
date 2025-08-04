import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  CircularProgress,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { getAllUserData } from "../api/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    document.cookie = "admin_token=; path=/; max-age=0";
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUserData();
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Admin Dashboard
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            size="small"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {loading ? (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <CircularProgress />
          </Box>
        ) : submissions.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary">
            No submissions found.
          </Typography>
        ) : (
          <Paper elevation={3}>
            <TableContainer sx={{ overflowX: "auto" }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#f1f1f1" }}>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Phone</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Persons</strong></TableCell>
                    <TableCell><strong>Purpose</strong></TableCell>
                    <TableCell><strong>Submitted At</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {submissions.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.name}</TableCell>
                      <TableCell>{entry.phone}</TableCell>
                      <TableCell>{entry.email}</TableCell>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.persons}</TableCell>
                      <TableCell>{entry.purpose}</TableCell>
                      <TableCell>
                        {new Date(entry.submittedAt).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default AdminDashboard;
