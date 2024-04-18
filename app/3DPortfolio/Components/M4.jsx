

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function M4(props) {
  const { nodes, materials } = useGLTF('./Models/bmw_m4_realistic_free.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.025}>
          <group position={[26.5, 42.029, 0.971]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-32.707, -9.228, 10.316]}>
              <mesh geometry={nodes.Object_10.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_12.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_14.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_16.geometry} material={materials.Material_698} />
              <mesh geometry={nodes.Object_18.geometry} material={materials.Material_695} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.Material_696} />
              <mesh geometry={nodes.Object_22.geometry} material={materials.Material_701} />
              <mesh geometry={nodes.Object_24.geometry} material={materials.Material_699} />
              <mesh geometry={nodes.Object_26.geometry} material={materials.Material_700} />
            </group>
          </group>
          <group position={[35.928, 37.016, 112.651]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[11.262, -7.254, 6.604]}>
              <mesh geometry={nodes.Object_30.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_32.geometry} material={materials.Material_701} />
              <mesh geometry={nodes.Object_34.geometry} material={materials.Material_707} />
              <mesh geometry={nodes.Object_36.geometry} material={materials.Material_708} />
            </group>
          </group>
          <group position={[42.072, 36.135, 110.235]} scale={[2.54, 2.54, 3.193]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Material_161} />
            <mesh geometry={nodes.Object_41.geometry} material={materials.Material_718} />
            <mesh geometry={nodes.Object_43.geometry} material={materials.Material_717} />
            <mesh geometry={nodes.Object_45.geometry} material={materials.Material_716} />
          </group>
          <group position={[32.119, 35.13, 116.369]} scale={[2.351, 2.414, 3.193]}>
            <mesh geometry={nodes.Object_48.geometry} material={materials.Material_161} />
            <mesh geometry={nodes.Object_50.geometry} material={materials.Material_718} />
            <mesh geometry={nodes.Object_52.geometry} material={materials.Material_717} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Material_716} />
          </group>
          <group position={[0.104, 23.42, 2.101]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-32.262, -1.901, 20.708]}>
              <mesh geometry={nodes.Object_58.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_60.geometry} material={materials.Material_697} />
            </group>
          </group>
          <group position={[30.736, 46.546, -109.43]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-76.172, -11.006, 8.648]}>
              <mesh geometry={nodes.Object_64.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_66.geometry} material={materials.Material_279} />
            </group>
          </group>
          <group position={[0.069, 46.375, -109.106]} rotation={[Math.PI, 0, Math.PI]} scale={[2.468, 2.468, 2.565]}>
            <group position={[-14.595, 0.031, 5.029]}>
              <mesh geometry={nodes.Object_70.geometry} material={materials.Material_739} />
              <mesh geometry={nodes.Object_72.geometry} material={materials.Material_738} />
              <mesh geometry={nodes.Object_74.geometry} material={materials.Material_701} />
              <mesh geometry={nodes.Object_76.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_78.geometry} material={materials.Material_717} />
              <mesh geometry={nodes.Object_80.geometry} material={materials.Material_740} />
            </group>
          </group>
          <group position={[43.303, 18.508, 83.787]} rotation={[0, 1.222, 0]} scale={[2.54, 2.54, 3.446]}>
            <group position={[0, 0, 2.365]}>
              <mesh geometry={nodes.Object_84.geometry} material={materials.Material_751} />
              <mesh geometry={nodes.Object_86.geometry} material={materials.Material_752} />
            </group>
          </group>
          <group position={[43.669, 18.508, 83.921]} rotation={[0, 1.222, 0]} scale={[2.636, 2.636, 2.516]}>
            <mesh geometry={nodes.Object_90.geometry} material={materials.Material_753} position={[0.094, -5.477, 2.787]} />
          </group>
          <group position={[46.944, 18.724, 85.109]} rotation={[0, 1.222, 0]} scale={[4.077, 4.077, 3.891]}>
            <group position={[0.466, -0.656, -0.008]}>
              <mesh geometry={nodes.Object_94.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_96.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_98.geometry} material={materials.Material_362} />
            </group>
          </group>
          <group position={[41.047, 18.497, 82.957]} rotation={[0, 1.222, 0]} scale={[2.661, 2.661, 0.569]}>
            <group position={[0, 0, 2.886]}>
              <mesh geometry={nodes.Object_102.geometry} material={materials.Material_408} />
              <mesh geometry={nodes.Object_104.geometry} material={materials.Material_717} />
            </group>
          </group>
          <group position={[47.198, 15.683, 76.036]} rotation={[0, 1.222, 2.892]} scale={[1.683, 1.683, 1.708]}>
            <group position={[0.826, 0.024, -4.271]}>
              <mesh geometry={nodes.Object_108.geometry} material={materials.Material_773} />
              <mesh geometry={nodes.Object_110.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_112.geometry} material={materials.Material_774} />
            </group>
          </group>
          <group position={[0.033, 36.963, 112.743]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <mesh geometry={nodes.Object_116.geometry} material={materials.Material_775} position={[11.298, -7.233, 20.736]} />
          </group>
          <group position={[30.643, 46.528, -109.384]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <mesh geometry={nodes.Object_120.geometry} material={materials.Material_775} position={[-76.154, -10.999, 8.685]} />
          </group>
          <mesh geometry={nodes.Object_123.geometry} material={materials.Material_776} position={[42.022, 39.407, 108.531]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.54, 2.54, 0.818]} />
          <group position={[0.031, 20.014, -124.952]} rotation={[Math.PI, 0, Math.PI]} scale={2.54}>
            <mesh geometry={nodes.Object_127.geometry} material={materials.Material_694} position={[-10.227, 0.025, -2.076]} />
          </group>
          <group position={[-0.022, 17.459, -123.254]} rotation={[Math.PI, 0, Math.PI]} scale={2.54}>
            <group position={[-8.362, 0, -0.849]}>
              <mesh geometry={nodes.Object_131.geometry} material={materials.Material_698} />
              <mesh geometry={nodes.Object_133.geometry} material={materials.Material_717} />
            </group>
          </group>
          <group position={[0.029, 15.403, -111.166]} rotation={[Math.PI, 0, Math.PI]} scale={2.54}>
            <group position={[-5.545, 0.124, -3.17]}>
              <mesh geometry={nodes.Object_137.geometry} material={materials.Material_717} />
              <mesh geometry={nodes.Object_139.geometry} material={materials.Material_697} />
            </group>
          </group>
          <group position={[0.035, 51.696, -123.118]} rotation={[Math.PI, 0, Math.PI]} scale={2.54}>
            <mesh geometry={nodes.Object_142.geometry} material={materials.Material_786} />
            <mesh geometry={nodes.Object_144.geometry} material={materials.Material_538} />
            <mesh geometry={nodes.Object_146.geometry} material={materials.Material_787} />
          </group>
          <group position={[0.076, 38.924, 127.303]} rotation={[-0.974, 0, 0]} scale={[5.843, 5.683, 4.01]}>
            <mesh geometry={nodes.Object_149.geometry} material={materials.Material_790} />
            <mesh geometry={nodes.Object_151.geometry} material={materials.Material_574} />
          </group>
          <group position={[0.076, 73.329, -52.212]} rotation={[0, Math.PI / 2, 0]} scale={[2.685, 2.721, 2.442]}>
            <mesh geometry={nodes.Object_155.geometry} material={materials.Material_698} position={[0.152, 1.057, -0.092]} />
          </group>
          <group position={[0.075, 54.91, -119.655]} rotation={[Math.PI, 0, Math.PI]} scale={[2.54, 2.349, 1.257]}>
            <mesh geometry={nodes.Object_159.geometry} material={materials.Material_694} position={[-6.35, -0.047, -3.319]} />
          </group>
          <group position={[12.994, 35.13, 128.878]} rotation={[-0.088, 0.149, 0]} scale={[0.349, 0.358, 0.376]}>
            <mesh geometry={nodes.Object_162.geometry} material={materials.Material_801} />
            <mesh geometry={nodes.Object_164.geometry} material={materials.Material_803} />
            <mesh geometry={nodes.Object_166.geometry} material={materials.Material_802} />
            <mesh geometry={nodes.Object_168.geometry} material={materials.Material_804} />
            <mesh geometry={nodes.Object_170.geometry} material={materials.Material_805} />
          </group>
          <group position={[-21.106, 51.687, -121.5]} rotation={[-3.139, -0.185, -3.127]} scale={[0.483, 0.502, 0.604]}>
            <mesh geometry={nodes.Object_173.geometry} material={materials.Material_801} />
            <mesh geometry={nodes.Object_175.geometry} material={materials.Material_803} />
            <mesh geometry={nodes.Object_177.geometry} material={materials.Material_802} />
            <mesh geometry={nodes.Object_179.geometry} material={materials.Material_804} />
            <mesh geometry={nodes.Object_181.geometry} material={materials.Material_805} />
          </group>
          <group position={[52.535, 37.744, 57.767]} rotation={[-1.285, 1.472, 1.305]} scale={[0.245, 0.251, 0.264]}>
            <group position={[-68.854, -1.059, 7.286]} rotation={[0.003, 0.261, 0.024]}>
              <mesh geometry={nodes.Object_185.geometry} material={materials.Material_801} />
              <mesh geometry={nodes.Object_187.geometry} material={materials.Material_803} />
              <mesh geometry={nodes.Object_189.geometry} material={materials.Material_802} />
              <mesh geometry={nodes.Object_191.geometry} material={materials.Material_804} />
              <mesh geometry={nodes.Object_193.geometry} material={materials.Material_805} />
            </group>
          </group>
          <mesh geometry={nodes.Object_196.geometry} material={materials.Material_826} position={[0.059, 43.074, -121.837]} rotation={[-3.056, 0, -Math.PI]} scale={3.96} />
          <group position={[-0.001, 43.07, -121.844]} rotation={[-3.067, 0, -Math.PI]} scale={0.765}>
            <mesh geometry={nodes.Object_200.geometry} material={materials.Material_717} position={[-5.596, 3.661, 4.328]} />
          </group>
          <group position={[0.076, 24.309, 126.434]} scale={2.54}>
            <mesh geometry={nodes.Object_203.geometry} material={materials.Material_694} />
            <mesh geometry={nodes.Object_205.geometry} material={materials.Material_697} />
          </group>
          <group position={[26.5, 42.029, 0.971]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-32.707, -9.228, 10.316]}>
              <mesh geometry={nodes.Object_209.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_211.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_213.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_215.geometry} material={materials.Material_698} />
              <mesh geometry={nodes.Object_217.geometry} material={materials.Material_738} />
            </group>
          </group>
          <group position={[26.5, 42.029, 0.971]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <mesh geometry={nodes.Object_221.geometry} material={materials.Material_694} position={[-32.707, -9.228, 10.316]} />
          </group>
          <group position={[0.069, 13.508, 6.834]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-30.398, 2.001, 20.722]}>
              <mesh geometry={nodes.Object_225.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_227.geometry} material={materials.Material_694} />
            </group>
          </group>
          <group position={[20.871, 41.556, -3.684]} rotation={[0, Math.PI / 2, 0]} scale={[2.54, 2.54, 2.675]}>
            <group position={[-2.283, -8.567, -1.899]}>
              <mesh geometry={nodes.Object_231.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_233.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_235.geometry} material={materials.Material_700} />
              <mesh geometry={nodes.Object_237.geometry} material={materials.Material_717} />
              <mesh geometry={nodes.Object_239.geometry} material={materials.Material_847} />
              <mesh geometry={nodes.Object_241.geometry} material={materials.Material_848} />
              <mesh geometry={nodes.Object_243.geometry} material={materials.Material_849} />
              <mesh geometry={nodes.Object_245.geometry} material={materials.Material_850} />
              <mesh geometry={nodes.Object_247.geometry} material={materials.Material_695} />
              <mesh geometry={nodes.Object_249.geometry} material={materials.Material_803} />
              <mesh geometry={nodes.Object_251.geometry} material={materials.Material_804} />
              <mesh geometry={nodes.Object_253.geometry} material={materials.Material_805} />
            </group>
          </group>
          <group position={[0.068, 61.633, -23.575]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <mesh geometry={nodes.Object_257.geometry} material={materials.Material_699} position={[-42.37, -16.946, 20.722]} />
          </group>
          <group position={[0.461, 65.722, -21.494]} rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
            <mesh geometry={nodes.Object_260.geometry} material={materials.Material_850} />
            <mesh geometry={nodes.Object_262.geometry} material={materials.Material_706} />
            <mesh geometry={nodes.Object_264.geometry} material={materials.Material_694} />
            <mesh geometry={nodes.Object_266.geometry} material={materials.Material_1860} />
            <mesh geometry={nodes.Object_268.geometry} material={materials.Material_697} />
          </group>
          <group position={[20.846, 48.678, 21.491]} rotation={[-2.967, 0, -Math.PI]} scale={[1.105, 1.105, 1.061]}>
            <mesh geometry={nodes.Object_271.geometry} material={materials.Material_706} />
            <mesh geometry={nodes.Object_273.geometry} material={materials.Material_1063} />
            <mesh geometry={nodes.Object_275.geometry} material={materials.Material_698} />
            <mesh geometry={nodes.Object_277.geometry} material={materials.Material_694} />
            <mesh geometry={nodes.Object_279.geometry} material={materials.Material_805} />
          </group>
          <group position={[44.868, 15.401, -78.729]} rotation={[2.985, Math.PI / 2, 0]} scale={[1.479, 0.977, 1.531]}>
            <group position={[0.826, 0.024, -4.271]}>
              <mesh geometry={nodes.Object_283.geometry} material={materials.Material_773} />
              <mesh geometry={nodes.Object_285.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_287.geometry} material={materials.Material_774} />
            </group>
          </group>
          <group position={[44.248, 18.508, -70.489]} rotation={[0, Math.PI / 2, 0]} scale={[2.636, 2.636, 2.516]}>
            <mesh geometry={nodes.Object_291.geometry} material={materials.Material_753} position={[0.094, -5.477, 2.787]} />
          </group>
          <group position={[41.455, 18.497, -70.498]} rotation={[0, Math.PI / 2, 0]} scale={[2.248, 2.248, 0.481]}>
            <group position={[0, 0, 2.886]}>
              <mesh geometry={nodes.Object_295.geometry} material={materials.Material_408} />
              <mesh geometry={nodes.Object_297.geometry} material={materials.Material_717} />
            </group>
          </group>
          <group position={[47.732, 18.724, -70.492]} rotation={[0, Math.PI / 2, 0]} scale={[4.077, 4.077, 3.891]}>
            <group position={[0.466, -0.656, -0.008]}>
              <mesh geometry={nodes.Object_301.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_303.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_305.geometry} material={materials.Material_362} />
            </group>
          </group>
          <group position={[43.858, 18.508, -70.489]} rotation={[0, Math.PI / 2, 0]} scale={[2.54, 2.54, 3.446]}>
            <group position={[0, 0, 2.365]}>
              <mesh geometry={nodes.Object_309.geometry} material={materials.Material_751} />
              <mesh geometry={nodes.Object_311.geometry} material={materials.Material_752} />
            </group>
          </group>
          <group position={[-42.564, 15.637, 76.361]} rotation={[Math.PI, -1.222, 0.361]} scale={[1.683, 1.683, 1.708]}>
            <group position={[0.826, 0.024, -4.271]}>
              <mesh geometry={nodes.Object_315.geometry} material={materials.Material_773} />
              <mesh geometry={nodes.Object_317.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_319.geometry} material={materials.Material_774} />
            </group>
          </group>
          <group position={[-45.002, 15.401, -63.633]} rotation={[-2.985, -Math.PI / 2, 0]} scale={[1.479, 0.977, 1.531]}>
            <group position={[0.826, 0.024, -4.271]}>
              <mesh geometry={nodes.Object_323.geometry} material={materials.Material_773} />
              <mesh geometry={nodes.Object_325.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_327.geometry} material={materials.Material_774} />
            </group>
          </group>
          <group position={[-44.996, 18.508, 84.856]} rotation={[Math.PI, -1.222, Math.PI]} scale={[2.636, 2.636, 2.516]}>
            <mesh geometry={nodes.Object_331.geometry} material={materials.Material_753} position={[0.094, -5.477, 2.787]} />
          </group>
          <group position={[-44.383, 18.508, -70.381]} rotation={[0, -Math.PI / 2, 0]} scale={[2.636, 2.636, 2.516]}>
            <mesh geometry={nodes.Object_335.geometry} material={materials.Material_753} position={[0.094, -5.477, 2.787]} />
          </group>
          <group position={[-42.374, 18.497, 85.819]} rotation={[Math.PI, -1.222, Math.PI]} scale={[2.661, 2.661, 0.569]}>
            <group position={[0, 0, 2.886]}>
              <mesh geometry={nodes.Object_339.geometry} material={materials.Material_408} />
              <mesh geometry={nodes.Object_341.geometry} material={materials.Material_717} />
            </group>
          </group>
          <group position={[-41.589, 18.497, -71.864]} rotation={[0, -Math.PI / 2, 0]} scale={[2.248, 2.248, 0.481]}>
            <group position={[0, 0, 2.886]}>
              <mesh geometry={nodes.Object_345.geometry} material={materials.Material_408} />
              <mesh geometry={nodes.Object_347.geometry} material={materials.Material_717} />
            </group>
          </group>
          <group position={[-47.867, 18.724, -70.378]} rotation={[0, -Math.PI / 2, 0]} scale={[4.077, 4.077, 3.891]}>
            <group position={[0.466, -0.656, -0.008]}>
              <mesh geometry={nodes.Object_351.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_353.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_355.geometry} material={materials.Material_362} />
            </group>
          </group>
          <group position={[-43.993, 18.508, -70.381]} rotation={[0, -Math.PI / 2, 0]} scale={[2.54, 2.54, 3.446]}>
            <group position={[0, 0, 2.365]}>
              <mesh geometry={nodes.Object_359.geometry} material={materials.Material_751} />
              <mesh geometry={nodes.Object_361.geometry} material={materials.Material_752} />
            </group>
          </group>
          <group position={[-48.271, 18.724, 83.667]} rotation={[Math.PI, -1.222, Math.PI]} scale={[4.077, 4.077, 3.891]}>
            <group position={[0.466, -0.656, -0.008]}>
              <mesh geometry={nodes.Object_365.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_367.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_369.geometry} material={materials.Material_362} />
            </group>
          </group>
          <group position={[-44.629, 18.508, 84.989]} rotation={[Math.PI, -1.222, Math.PI]} scale={[2.54, 2.54, 3.446]}>
            <group position={[0, 0, 2.365]}>
              <mesh geometry={nodes.Object_373.geometry} material={materials.Material_751} />
              <mesh geometry={nodes.Object_375.geometry} material={materials.Material_752} />
            </group>
          </group>
          <group position={[51.563, 36.364, 41.666]} rotation={[0, 1.571, 0]} scale={2.54}>
            <group position={[-16.685, -6.998, 0.449]}>
              <mesh geometry={nodes.Object_379.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_381.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_383.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_385.geometry} material={materials.Material_699} />
              <mesh geometry={nodes.Object_387.geometry} material={materials.Material_698} />
              <mesh geometry={nodes.Object_389.geometry} material={materials.Material_932} />
              <mesh geometry={nodes.Object_391.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_393.geometry} material={materials.Material_849} />
              <mesh geometry={nodes.Object_395.geometry} material={materials.Material_695} />
              <mesh geometry={nodes.Object_397.geometry} material={materials.Material_847} />
              <mesh geometry={nodes.Object_399.geometry} material={materials.Material_1824} />
            </group>
          </group>
          <group position={[17.744, 51.683, 40.011]} rotation={[Math.PI, 0, Math.PI]} scale={[2.54, 2.263, 2.118]}>
            <mesh geometry={nodes.Object_402.geometry} material={materials.Material_706} />
            <mesh geometry={nodes.Object_404.geometry} material={materials.Material_694} />
            <mesh geometry={nodes.Object_406.geometry} material={materials.Material_775} />
            <mesh geometry={nodes.Object_408.geometry} material={materials.Material_700} />
            <mesh geometry={nodes.Object_410.geometry} material={materials.Material_849} />
            <mesh geometry={nodes.Object_412.geometry} material={materials.Material_697} />
            <mesh geometry={nodes.Object_414.geometry} material={materials.Material_1082} />
            <mesh geometry={nodes.Object_416.geometry} material={materials.Material_699} />
            <mesh geometry={nodes.Object_418.geometry} material={materials.Material_698} />
            <mesh geometry={nodes.Object_420.geometry} material={materials.Material_1001} />
            <mesh geometry={nodes.Object_422.geometry} material={materials.Material_1522} />
            <mesh geometry={nodes.Object_424.geometry} material={materials.Material_1548} />
          </group>
          <mesh geometry={nodes.Object_427.geometry} material={materials.Material_706} position={[20.748, 39.372, 36.475]} rotation={[-1.489, 0, 0]} scale={[1.224, 1.085, 1.139]} />
          <group position={[0.069, 13.508, 6.834]} rotation={[0, Math.PI / 2, 0]} scale={2.54}>
            <group position={[-30.398, 2.001, 20.722]}>
              <mesh geometry={nodes.Object_431.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_433.geometry} material={materials.Material_700} />
              <mesh geometry={nodes.Object_435.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_437.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_439.geometry} material={materials.Material_849} />
              <mesh geometry={nodes.Object_441.geometry} material={materials.Material_847} />
              <mesh geometry={nodes.Object_443.geometry} material={materials.Material_695} />
              <mesh geometry={nodes.Object_445.geometry} material={materials.Material_803} />
              <mesh geometry={nodes.Object_447.geometry} material={materials.Material_804} />
              <mesh geometry={nodes.Object_449.geometry} material={materials.Material_805} />
            </group>
          </group>
          <group position={[0.463, 32.172, -39.085]} rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
            <group position={[10.748, -4.885, -1.718]}>
              <mesh geometry={nodes.Object_453.geometry} material={materials.Material_849} />
              <mesh geometry={nodes.Object_455.geometry} material={materials.Material_847} />
              <mesh geometry={nodes.Object_457.geometry} material={materials.Material_706} />
            </group>
          </group>
          <group position={[0.082, 44.872, -55.239]} scale={[3.297, 2.54, 2.54]}>
            <mesh geometry={nodes.Object_460.geometry} material={materials.Material_849} />
            <mesh geometry={nodes.Object_462.geometry} material={materials.Material_706} />
          </group>
          <group position={[21.319, 41.874, -55.283]} scale={2.54}>
            <mesh geometry={nodes.Object_465.geometry} material={materials.Material_849} />
            <mesh geometry={nodes.Object_467.geometry} material={materials.Material_847} />
            <mesh geometry={nodes.Object_469.geometry} material={materials.Material_850} />
          </group>
          <group position={[10.045, 27.839, -49.845]} rotation={[-Math.PI / 2, 0.175, 0]} scale={1.067}>
            <mesh geometry={nodes.Object_472.geometry} material={materials.Material_706} />
            <mesh geometry={nodes.Object_474.geometry} material={materials.Material_805} />
            <mesh geometry={nodes.Object_476.geometry} material={materials.Material_697} />
          </group>
          <group position={[0.86, 66.81, 17.883]} scale={[3.051, 2.79, 1.706]}>
            <group position={[0, 0.046, -2.319]}>
              <mesh geometry={nodes.Object_480.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_482.geometry} material={materials.Material_999} />
            </group>
          </group>
          <group position={[-51.415, 36.364, 41.666]} rotation={[0, 1.571, 0]} scale={2.54}>
            <group position={[-16.685, -6.998, 0.449]}>
              <mesh geometry={nodes.Object_486.geometry} material={materials.Material_692} />
              <mesh geometry={nodes.Object_488.geometry} material={materials.Material_697} />
              <mesh geometry={nodes.Object_490.geometry} material={materials.Material_694} />
              <mesh geometry={nodes.Object_492.geometry} material={materials.Material_699} />
              <mesh geometry={nodes.Object_494.geometry} material={materials.Material_698} />
              <mesh geometry={nodes.Object_496.geometry} material={materials.Material_932} />
              <mesh geometry={nodes.Object_498.geometry} material={materials.Material_706} />
              <mesh geometry={nodes.Object_500.geometry} material={materials.Material_849} />
              <mesh geometry={nodes.Object_502.geometry} material={materials.Material_695} />
              <mesh geometry={nodes.Object_504.geometry} material={materials.Material_847} />
              <mesh geometry={nodes.Object_506.geometry} material={materials.Material_1824} />
            </group>
          </group>
          <mesh geometry={nodes.Object_509.geometry} material={materials.Material_1015} position={[20.143, 69.558, 11.615]} rotation={[-1.484, 0, 0]} />
          <group position={[11.093, 13.006, 43.214]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.865, 1]}>
            <mesh geometry={nodes.Object_512.geometry} material={materials.Material_1014} />
            <mesh geometry={nodes.Object_514.geometry} material={materials.Material_1069} />
            <mesh geometry={nodes.Object_516.geometry} material={materials.Material_1046} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./Models/bmw_m4_realistic_free.glb')

