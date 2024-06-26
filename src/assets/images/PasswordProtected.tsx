import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function PasswordProtected(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 240, height: 216 }} viewBox="0 0 240 216" fill="none" {...props}>
      <circle cx="120" cy="129" r="87" fill="url(#paint0_linear_334_7156)" />
      <path
        d="M161.08 163.56H148.58V95.53C148.58 79.52 135.55 66.49 119.54 66.49C103.53 66.49 90.5 79.52 90.5 95.53V163.55H78V95.53C78.01 72.63 96.64 54 119.54 54C142.44 54 161.07 72.63 161.07 95.53V163.55L161.08 163.56Z"
        fill="#D4D9DE"
      />
      <mask id="path-3-inside-1_334_7156" fill="white">
        <path d="M64 136C64 134.895 64.8954 134 66 134H174C175.105 134 176 134.895 176 136V202C176 203.105 175.105 204 174 204H66C64.8954 204 64 203.105 64 202V136Z" />
      </mask>
      <path
        d="M64 136C64 134.895 64.8954 134 66 134H174C175.105 134 176 134.895 176 136V202C176 203.105 175.105 204 174 204H66C64.8954 204 64 203.105 64 202V136Z"
        fill="#BDC3C8"
      />
      <path
        d="M64 134H176H64ZM176 202C176 204.209 174.209 206 172 206H68C65.7909 206 64 204.209 64 202C64 202 64.8954 202 66 202H174C175.105 202 176 202 176 202ZM64 204V134V204ZM176 134V204V134Z"
        fill="#8E9EAE"
        mask="url(#path-3-inside-1_334_7156)"
      />
      <path
        d="M129.715 162.36C129.718 162.36 129.72 162.358 129.72 162.355C129.717 157.187 125.528 153 120.36 153C115.19 153 111 157.19 111 162.36C111 166.107 113.215 169.302 116.39 170.791C117.198 171.17 117.8 171.935 117.8 172.828V183.31C117.8 184.415 118.695 185.31 119.8 185.31H120.91C122.015 185.31 122.91 184.415 122.91 183.31V172.829C122.91 171.936 123.513 171.17 124.322 170.792C127.501 169.304 129.708 166.11 129.71 162.365C129.71 162.362 129.712 162.36 129.715 162.36Z"
        fill="#F1F4F6"
      />
      <path
        d="M219.108 26.6877L228 23.2465L219.312 19.8843L215.776 10L212.328 19.6368L203 23.2465L212.532 26.9352L215.776 36L219.108 26.6877Z"
        fill="#BDC3C8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_334_7156"
          x1="101"
          y1="-254"
          x2="120"
          y2="285.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADB9BF" />
          <stop offset="1" stopColor="#F1F4F6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
