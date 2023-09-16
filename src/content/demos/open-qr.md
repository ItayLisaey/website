---
title: 'OpenQR'
emoji: '📸'
status: 'Done'
description: 'Demonstrating State Machines and Progressive Web Apps through the use-case of an offline QR code scanner.'
url: 'https://github.com/ItayLisaey/open-qr'
pubDate: 'Jul 08 2022'
heroImage: 'https://github.com/ItayLisaey/open-qr/raw/main/public/open-qr-cover-repo.png?raw=true'
---

This small demo was born after I was in [ReactNext 2022](https://www.react-next.com/), a React confrence in Tel Aviv.
David Khourshid, the founder of [Stately](https://stately.ai/) gave an amazing talk about the value and benefit of using state machines. In the same day I stayed late out of a desire to showcase to my team the ease with which new technologies or libraries can be explored, implemented in small-scale demos, given engaging names, and subsequently open-sourced.

## Background

OpenQR was conceived to serve as an educational tool, illustrating the implementation of state machines using XState and Stately for streamlined state management.
<br/>
The project's primary aim was to demonstrate to my team how state machines can simplify complex user interface behaviors while maintaining a user-friendly and secure environment.

## Key Features

1. **Offline Capability**: OpenQR is designed as a Progressive Web App (PWA), ensuring full functionality even in offline scenarios. This underscores the adaptability and accessibility of the application, a key aspect of modern web development.

2. **Safety and Security**: Prioritizing user safety and privacy, OpenQR processes QR codes directly on the user's device, preventing automatic opening of links. This approach empowers users with control and ensures their privacy.

3. **User-Friendly Design**: OpenQR boasts an intuitive, icon-only based user interface that minimizes reliance on textual elements. This design choice promotes ease of use and navigation, breaking down language barriers.

### Technologies Used

- Built with [Next.js](https://nextjs.org/) and deployed with [Vercel](https://vercel.com).
- Using [Nimiq's QR Scanner](https://github.com/nimiq/qr-scanner)
- [XState](https://xstate.js.org/) and [Stately](https://stately.ai/) for state management.
