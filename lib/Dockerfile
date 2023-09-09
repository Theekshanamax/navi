FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Theekshanamax/navi /root/Theekshanamax
WORKDIR /root/Theekshanamax/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
