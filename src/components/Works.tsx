import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import GearImage from '../static/images/gear.png';
import InterpreterImage from '../static/images/interpreter.png';

function Works() {
  return (
    <Box sx={{ minWidth: 650, maxWidth: 1000, margin: 'auto' }} p={2}>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h4">Works</Typography>
      </Box>
      <Card>
        <Grid container>
          <Grid item xs>
            <CardMedia component="img" image={GearImage} />
          </Grid>
          <Grid item xs>
            <CardContent>
              <Typography variant="h6" align="center">
                C言語のソースを生成する
                <br />
                ビジュアルプログラミングソフトウェア
              </Typography>
              <Typography variant="body1" align="left">
                高校3年次に半年かけて制作した。
                <br />
                友人4人でチームを組み開発を行った。
                <br />
                開発はC#を用いて行ったが、当時Cの知識しか持ち合わせていなかったため、ほとんどがCと共通している文法の範囲で作成した。（振り返ると、クラスも知らなかった中よく完成したように思う）
                <br />
                画像は動作時のスクリーンショットで、対応したアイコンをクリックすることでソースコードの対応箇所をハイライトすることができる。
              </Typography>
              <CardContent>
                <Typography variant="h6">使用技術</Typography>
                <Typography color="textSecondary">C# / VisualStudio</Typography>
              </CardContent>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Grid container>
          <Grid item xs>
            <CardContent>
              <Typography variant="h6" align="center">
                ブラウザ上で動作可能な
                <br />
                C言語の処理系
              </Typography>
              <Typography variant="body1" align="left">
                大学の卒業研究のために制作した。
                <br />
                大学1年時のプログラミングの授業で、課題の採点システムがダウンすることがあったために、テストの処理をブラウザにさせることで処理を分散させることでサーバの負荷を減らした。
                <br />
                C言語のパーサはANTLRを使用して生成し、パーサによって出来た抽象構文木を走査するプログラムを記述することでブラウザ上での実行を可能にしている。
              </Typography>
              <CardContent>
                <Typography variant="h6">論文</Typography>
                <Link href="https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=221333&item_no=1">
                  情報処理学会 電子図書館
                </Link>
                <Typography variant="h6">使用技術</Typography>
                <Typography color="textSecondary">
                  JavaScript / ANTLR
                </Typography>
              </CardContent>
            </CardContent>
          </Grid>
          <Grid item xs>
            <CardMedia component="img" image={InterpreterImage} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default Works;
