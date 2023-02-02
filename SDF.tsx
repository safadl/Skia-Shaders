import React from 'react';
import {Canvas, Skia, Shader, Fill} from '@shopify/react-native-skia';

const source = Skia.RuntimeEffect.Make(`
uniform float4 colors[4];
vec4 main(vec2 xy) {
  return colors[1];
}`)!;

const colors = ['#dafb61', '#61DAFB', '#fb61da', '#61fbcf'].map(c =>
  Skia.Color(c),
);

export const SDF = () => {
  return (
    <Canvas style={{flex: 1}}>
      <Fill>
        <Shader source={source} uniforms={{colors}} />
      </Fill>
    </Canvas>
  );
};
