---

title: "Concealed Object Detection for Passive Millimeter-Wave Security Imaging Based on Task-Aligned Detection Transformer"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'Based on our self-developed PMMW security screening dataset, experimental results including comparison with State-Of-The-Art (SOTA) methods and ablation study demonstrate that the PMMW-DETR obtains higher accuracy and classification confidence than previous works, and exhibits robustness to the PMMW images of low quality.'
date: 2023-03-13
venue: 'IEEE TRANSACTIONS ON INSTRUMENTATION AND MEASUREMENT'

paperurl: 'https://arxiv.org/abs/2212.00313'

# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'

---

## Abstract:

Passive millimeter-wave (PMMW) is a significant potential technique for human security screening. Several popular object detection networks have been used for PMMW images. However, restricted by the low resolution and high noise of PMMW images, PMMW hidden object detection based on deep learning usually suffers from low accuracy and low classification confidence. To tackle the above problems, this paper proposes a Task-Aligned Detection Transformer network, named PMMW-DETR. In the first stage, a Denoising Coarse-to-Fine Transformer (DCFT) backbone is designed to extract long- and short-range features in the different scales. In the second stage, we propose the Query Selection module to introduce learned spatial features into the network as prior knowledge, which enhances the semantic perception capability of the network. In the third stage, aiming to improve the classification performance, we perform a Task-Aligned Dual-Head block to decouple the classification and regression tasks. Based on our self-developed PMMW security screening dataset, experimental results including comparison with State-Of-The-Art (SOTA) methods and ablation study demonstrate that the PMMW-DETR obtains higher accuracy and classification confidence than previous works, and exhibits robustness to the PMMW images of low quality.

![illustration](/images/fig_arch.pdf)


[Paper](https://arxiv.org/abs/2212.00313) | [Github](https://github.com/Ch3ngGuo/opening-source-PMMW-dataset)

## Recommended citation:

```
@article{openPMMW,
  title={Concealed Object Detection for Passive Millimeter-Wave Security Imaging Based on Task-Aligned Detection Transformer.},
  author={Cheng Guo, Fei Hu, Yan Hu.},
  journal={IEEE TRANSACTIONS ON INSTRUMENTATION AND MEASUREMENT},
  year={2022}
}
```