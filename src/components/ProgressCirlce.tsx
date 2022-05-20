import React from 'react';
import {View} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
type Props = {
  downloadProgress: number;
  radius?: number;
  fill?: string;
};
const ProgressCircle = (props: Props) => {
  const {downloadProgress, radius = 50, fill = 'lime'} = props;
  const pointsXY = () => {
    let widthStroke = radius / 12.5;
    let points = `${radius},${radius} ${radius},0`; //center point 1 and point 2 fixed vertical line
    const coordinatesXY = (coordinates: number) => {
      if (coordinates <= 12.5) {
        return ` ${radius + coordinates * widthStroke},0`; //point 3
      } else if (coordinates <= 37.5) {
        return ` ${radius * 2},${(coordinates - 12.5) * widthStroke}`; //point 4
      } else if (coordinates <= 62.5) {
        return ` ${radius * 2 - (coordinates - 37.5) * widthStroke},${
          radius * 2
        }`; // point 5
      } else if (coordinates <= 87.5) {
        return ` 0,${radius * 2 - (coordinates - 62.5) * widthStroke}`; // point 6
      } else {
        return ` ${(coordinates - 87.5) * widthStroke},0`;
      }
    };
    if (downloadProgress <= 12.5) {
      points += coordinatesXY(downloadProgress); // 3 points
    } else if (downloadProgress <= 37.5) {
      points += coordinatesXY(12.5) + coordinatesXY(downloadProgress); //4 points
    } else if (downloadProgress <= 62.5) {
      points +=
        coordinatesXY(12.5) +
        coordinatesXY(37.5) +
        coordinatesXY(downloadProgress); //5 points
    } else if (downloadProgress <= 87.5) {
      points +=
        coordinatesXY(12.5) +
        coordinatesXY(37.5) +
        coordinatesXY(62.5) +
        coordinatesXY(downloadProgress); //6 points
    } else {
      points +=
        coordinatesXY(12.5) +
        coordinatesXY(37.5) +
        coordinatesXY(62.5) +
        coordinatesXY(87.5) +
        coordinatesXY(downloadProgress); //7 points
    }
    return points;
  };
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        overflow: 'hidden',
        borderWidth: 1,
      }}>
      <Svg height={radius * 2} width={radius * 2}>
        <Polygon points={pointsXY()} fill={fill} />
      </Svg>
    </View>
  );
};
export default ProgressCircle;
