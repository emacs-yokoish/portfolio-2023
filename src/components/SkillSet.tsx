import React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function createLangData(name: string, level: string, reason: string) {
  return { name, level, reason };
}

function createLibraryData(
  name: string,
  usage: string,
  lang: string,
  level: string,
  reason: string
) {
  return { name, usage, lang, level, reason };
}

function SkillSet() {
  const langRows = [
    createLangData('C', '★★☆', '習い事・高校の授業'),
    createLangData('ShellScript', '★☆☆', '高校の授業'),
    createLangData('java', '★★☆', '大学の授業'),
    createLangData('C++', '★☆☆', '大学の課題のため'),
    createLangData('Python', '★★☆', 'アルバイト'),
    createLangData('JavaScript', '★★★', '大学の授業'),
    createLangData('TypeScript', '★★★', '研究室の主要言語'),
    createLangData('Rust', '★★☆', '興味'),
    createLangData('Go', '★☆☆', '興味'),
    createLangData('PHP', '★☆☆', 'インターンで使用'),
    createLangData('scheme', '★☆☆', '大学院の授業'),
    createLangData('emacs-lisp', '★☆☆', 'エディタの設定'),
  ];
  const libraryRows = [
    createLibraryData(
      'express',
      'バックエンド',
      'JavaScript/TypeScript',
      '★★★',
      '大学の授業'
    ),
    createLibraryData(
      'fastify',
      'バックエンド',
      'JavaScript/TypeScript',
      '★★★',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData(
      'NestJS',
      'フルスタック',
      'TypeScript',
      '★★★',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData(
      'TypeORM',
      'O/Rマッパー',
      'JavaScript/TypeScript',
      '★★☆',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData('Slim', 'バックエンド', 'PHP', '★☆☆', 'インターンで使用'),
    createLibraryData(
      'MySQL',
      'データベース',
      '',
      '★★☆',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData(
      'MariaDB',
      'データベース',
      '',
      '★★☆',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData(
      'PostgreSQL',
      'データベース',
      '',
      '★★☆',
      '研究室用のソフトウェア（非研究）の開発のため'
    ),
    createLibraryData('ANTLR', 'パーサジェネレータ', '', '★★★', '研究のため'),
    createLibraryData('git', 'バージョン管理', '', '★★★', ''),
  ];
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h4">SkillSet</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="body1">
          ★…触れたことがある/★★…人に教えられる/★★★…システムやライブラリの開発経験がある
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={2}>
        <Typography variant="h6">プログラミング言語</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Table sx={{ minWidth: 650, maxWidth: 1000, margin: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>言語名</TableCell>
              <TableCell>レベル</TableCell>
              <TableCell>学んだきっかけ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {langRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box display="flex" justifyContent="center" p={2}>
        <Typography variant="h6">ライブラリ・ツール</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Table sx={{ minWidth: 650, maxWidth: 1000, margin: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>ライブラリ・ツール名</TableCell>
              <TableCell>用途</TableCell>
              <TableCell>言語</TableCell>
              <TableCell>レベル</TableCell>
              <TableCell>学んだきっかけ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {libraryRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.usage}</TableCell>
                <TableCell>{row.lang}</TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default SkillSet;
