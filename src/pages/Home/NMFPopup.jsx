import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NMFPopup = () => {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setVisible(true), 1500);
        const timer2 = setTimeout(() => setExpanded(true), 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    if (closed) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                right: visible ? 20 : -150,
                bottom: 30,
                zIndex: 9999,
                transition: 'right 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                cursor: 'pointer',
                fontFamily: "'Cinzel', serif",
            }}
            onClick={() => window.open('https://nmf.ndmcbd.org', '_blank')}
        >
            <Box
                sx={{
                    width: expanded ? '300px' : '40px',
                    height: expanded ? 'auto' : '150px',
                    background: 'linear-gradient(to bottom, #1d1d1d, #000000)',
                    border: '2px solid #c5a059',
                    borderRadius: expanded ? '10px' : '20px',
                    boxShadow: '0 0 20px rgba(197, 160, 89, 0.3)',
                    overflow: 'hidden',
                    transition: 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: expanded ? 'flex-start' : 'center',
                    padding: expanded ? '20px' : '0',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        opacity: expanded ? 0 : 1,
                        transition: 'opacity 0.3s',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <Box sx={{ width: '2px', height: '80%', background: '#c5a059', opacity: 0.5 }} />
                </Box>

                <Box
                    sx={{
                        opacity: expanded ? 1 : 0,
                        transform: expanded ? 'scale(1)' : 'scale(0.8)',
                        transition: 'all 0.5s ease 0.3s',
                        display: expanded ? 'flex' : 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    <Box
                        component="img"
                        src="https://nmf.ndmcbd.org/logo.png"
                        alt="NMF Logo"
                        sx={{
                            width: '80px',
                            marginBottom: '10px',
                            filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))'
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#c5a059',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            marginBottom: '8px',
                            lineHeight: 1.2
                        }}
                    >
                        6th NDC National Math Festival 2026
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#d0d0d0',
                            fontSize: '0.85rem',
                            lineHeight: 1.4
                        }}
                    >
                        Be a CA, Club partner or Register in our exciting segments
                    </Typography>

                    <Box sx={{ mt: 2, borderBottom: '1px solid #c5a059', pb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#c5a059', letterSpacing: 1 }}>
                            CLICK TO EXPLORE
                        </Typography>
                    </Box>
                </Box>
                {expanded && (
                    <Box
                        onClick={(e) => {
                            e.stopPropagation();
                            setClosed(true);
                        }}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: '#fff',
                            opacity: 0.5,
                            '&:hover': { opacity: 1 },
                            zIndex: 2
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default NMFPopup;
