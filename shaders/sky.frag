#version 450 core
#extension GL_GOOGLE_include_directive : enable

#include "importantconstants.h"

layout(location=0) in vec3 objPos;

layout(set=0,binding=MIPMAP_SAMPLER_SLOT) uniform sampler mipSampler;
layout(set=0,binding=ENVMAP_TEXTURE_SLOT) uniform textureCube skyboxTexture;

layout(location=0) out vec4 color;


void main(){
    vec4 c = texture( samplerCube(skyboxTexture,mipSampler),
                      objPos);
    color = c;
}