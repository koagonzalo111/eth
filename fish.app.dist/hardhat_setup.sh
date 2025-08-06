# Step 0: Go to home directory
cd ~

# Step 1: Clean up all previous Node.js installations
rm -rf ~/.nvm
rm -rf ~/nodejs
rm -rf ~/.node*
rm -rf ~/.npm*
rm -rf ~/.cache/node*
sed -i '/nvm/d' ~/.bashrc

# Step 2: Uninstall potentially broken packages
pkg uninstall -y nodejs nodejs-lts

# Step 3: Install Termux-compatible Node.js
pkg update -y
pkg install -y nodejs

# Step 4: Verify working Node/npm/npx
echo -e "\nNode version:"
node -v
echo "npm version:"
npm -v
echo "npx version:"
npx -v

# Step 5: Go to your Hardhat project
cd ~/elparadisogonzalo-monorepo/fish.app

# Step 6: Clean old dependencies
rm -rf node_modules package-lock.json

# Step 7: Install specific Hardhat version
npm install --save-dev hardhat@2.17.3

# Step 8: Compile project
npx hardhat compile
