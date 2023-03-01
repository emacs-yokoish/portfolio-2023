import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <Box p={2}>
      <Box display ="flex" justifyContent="center" p={1}>
        <Typography variant="h5">
          About
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="body1" align="left">
          明治大学大学院 理工学研究科 ソフトウェア工学研究室所属<br />
          小学校3年時に親に勧められ、プログラミング教室でプログラミングに触れ始める。<br />
          教材のLEGO MINDSTORMS EV3を使用してロボットを作成する中で、ハードウェアよりもソフトウェアが好きだと自覚し、プログラミングに注力し始める。<br />
          その流れで高校は東工大附属 情報システム分野に進み、専門性を高めるための勉強を進める。
          大学ではソフトウェア工学研究室に所属し、研究としてコンパイラの作成に取り組んだり、ゼミ内で使用するためのソフトウェアの作成などを行った。
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
