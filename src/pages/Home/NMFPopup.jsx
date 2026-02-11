import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NMFPopup = () => {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setVisible(true), 1000);
        const timer2 = setTimeout(() => setExpanded(true), 2000);

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
                right: visible ? '20px' : '-160px',
                bottom: '30px',
                zIndex: 9999,
                transition: 'right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                fontFamily: "'Cinzel', serif",
            }}
            onClick={() => window.open('https://nmf.ndmcbd.org', '_blank')}
        >
            <Box
                sx={{
                    width: expanded ? '300px' : '50px',
                    height: expanded ? '320px' : '100px',
                    background: 'linear-gradient(90deg, #1d1d1d 0%, #2a2a2a 50%, #1d1d1d 100%)',
                    border: '2px solid #c5a059',
                    borderRadius: expanded ? '10px' : '25px',
                    boxShadow: expanded
                        ? '0 10px 30px rgba(0,0,0,0.5)'
                        : '0 5px 15px rgba(197, 160, 89, 0.4)',
                    overflow: 'hidden',
                    transition: 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: expanded ? '20px' : '0',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        width: '30px',
                        height: '4px',
                        background: '#c5a059',
                        borderRadius: '2px',
                        opacity: expanded ? 0 : 1,
                        transition: 'opacity 0.3s',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: '4px',
                        height: '60%',
                        background: 'linear-gradient(to bottom, #c5a059, #8c6d36)',
                        opacity: expanded ? 0 : 1,
                        transition: 'opacity 0.3s',
                        borderRadius: '2px',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        width: '30px',
                        height: '4px',
                        background: '#c5a059',
                        borderRadius: '2px',
                        opacity: expanded ? 0 : 1,
                        transition: 'opacity 0.3s',
                    }}
                />


                <Box
                    sx={{
                        opacity: expanded ? 1 : 0,
                        transform: expanded ? 'scale(1)' : 'scale(0.8)',
                        transition: 'all 0.6s ease 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '90%',
                        justifyContent: 'space-between',
                        visibility: expanded ? 'visible' : 'hidden',
                    }}
                >
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src="https://nmf.ndmcbd.org/assets/logo.png"
                            alt="NMF Logo"
                            sx={{
                                width: '100px',
                                marginBottom: '15px',
                                filter: 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.3))'
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#c5a059',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                marginBottom: '10px',
                                lineHeight: 1.2
                            }}
                        >
                            6th NDC National Math Festival 2026
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#e0e0e0',
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                px: 1
                            }}
                        >
                            Be a CA, Club partner or Register in our exciting segments
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 'auto', borderBottom: '1px solid #c5a059', pb: 0.5, width: 'fit-content' }}>
                        <Typography variant="caption" sx={{ color: '#c5a059', letterSpacing: 2, fontWeight: 'bold' }}>
                            OPEN PORTAL
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
