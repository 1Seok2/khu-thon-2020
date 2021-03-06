import React, { useEffect, useState } from 'react';
import * as s from './GuideStyled';
import i1 from 'assets/img/guide/1.png';
import i2 from 'assets/img/guide/2.png';
import i3 from 'assets/img/guide/3.png';
import i4 from 'assets/img/guide/4.png';
import i5 from 'assets/img/guide/5.png';
import i6 from 'assets/img/guide/6.png';
import i7 from 'assets/img/guide/7.png';
import i8 from 'assets/img/guide/8.png';
import i9 from 'assets/img/guide/9.png';

const delayArray = [10, 8, 4, 3, 6, 5, 4, 4, 4, 3, 6, 6, 5];
const imgArray = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
const fileArray = [0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 7, 8];

const Guide = (props) => {
  return (
    <>
      <s.GImage
        src={imgArray[fileArray[props.grade.idx ? props.grade.idx : 0]]}
      ></s.GImage>
      <s.YellowCircle
        isPlay={props.isPlay}
        delay={delayArray[props.grade.idx]}
      ></s.YellowCircle>
    </>
  );
};

export default Guide;
